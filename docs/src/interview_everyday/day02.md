<!-- toc -->

# 介绍css aspect-ratio 和常用的场景

CSS的aspect-ratio属性用于设置元素的宽高比，该属性的取值为<ratio>，其中<ratio>是一个由两个正整数组成的比例，用冒号分隔。例如，aspect-ratio: 16 / 9;表示元素的宽高比为16:9。

常用的场景包括但不限于：

图片和视频的尺寸调整：使用aspect-ratio属性可以帮助图片和视频在不同的屏幕尺寸上自适应显示，并保持正确的宽高比。例如，可以设置一个宽度为100%的容器，并在其中嵌入一个aspect-ratio为16:9的视频，以确保视频在任何宽高比下都能正确显示。

响应式布局：在设计响应式网站时，经常需要根据屏幕宽度和高度调整布局。使用aspect-ratio属性可以帮助设计师在不同的屏幕尺寸上保持正确的布局比例。例如，可以为一个容器设置一个aspect-ratio属性，以确保在任何屏幕尺寸下都可以正确呈现。

图形设计：在图形设计中，经常需要使用不同的宽高比例来呈现不同的效果。使用aspect-ratio属性可以帮助设计师在不同的场景下实现所需的宽高比例。例如，可以为一个容器设置一个aspect-ratio属性，以确保它与设计所需的比例相匹配。

# rollup
## output.manualChunks
Type:	{ [chunkAlias: string]: string[] } | ((id: string, {getModuleInfo, getModuleIds}) => string | void)
Allows the creation of custom shared common chunks. When using the object form, each property represents a chunk that contains the listed modules and all their dependencies if they are part of the module graph unless they are already in another manual chunk. The name of the chunk will be determined by the property key.

Note that it is not necessary for the listed modules themselves to be part of the module graph, which is useful if you are working with @rollup/plugin-node-resolve and use deep imports from packages. For instance

类型：{ [chunkAlias: string]: string[] } | ((id: string, {getModuleInfo, getModuleIds}) => string | void)

允许创建自定义共享常用块。使用对象形式时，每个属性表示一个包含列出模块及其依赖项（如果它们是模块图的一部分）的块，除非它们已经在另一个手动块中。块的名称将由属性键确定。

注意，列出的模块本身不必是模块图的一部分，这对于使用@rollup/plugin-node-resolve并从软件包中使用深层导入时非常有用。例如：
```javascript
({
	manualChunks: {
		lodash: ['lodash']
	}
});
```
will put all lodash modules into a manual chunk even if you are only using imports of the form import get from 'lodash/get'.

When using the function form, each resolved module id will be passed to the function. If a string is returned, the module and all its dependency will be added to the manual chunk with the given name. For instance this will create a vendor chunk containing all dependencies inside node_modules:
将把所有lodash模块放入一个手动块中，即使你只使用形如 import get from 'lodash/get' 的导入。

使用函数形式时，每个已解析的模块ID将传递给函数。如果返回字符串，则将该模块及其所有依赖项添加到具有给定名称的手动块中。例如，这将创建一个包含node_modules内所有依赖项的node_modules：
```javascript
function manualChunks(id) {
	if (id.includes('node_modules')) {
		return 'vendor';
	}
}
```

Be aware that manual chunks can change the behaviour of the application if side effects are triggered before the corresponding modules are actually used.

When using the function form, manualChunks will be passed an object as second parameter containing the functions getModuleInfo and getModuleIds that work the same way as this.getModuleInfo and this.getModuleIds on the plugin context.

This can be used to dynamically determine into which manual chunk a module should be placed depending on its position in the module graph. For instance consider a scenario where you have a set of components, each of which dynamically imports a set of translated strings, i.e.

```js
// Inside the "foo" component

function getTranslatedStrings(currentLanguage) {
	switch (currentLanguage) {
		case 'en':
			return import('./foo.strings.en.js');
		case 'de':
			return import('./foo.strings.de.js');
		// ...
	}
}
```
If a lot of such components are used together, this will result in a lot of dynamic imports of very small chunks: Even though we know that all language files of the same language that are imported by the same chunk will always be used together, Rollup does not have this information.

The following code will merge all files of the same language that are only used by a single entry point:

```js
function manualChunks(id, { getModuleInfo }) {
	const match = /.*\.strings\.(\w+)\.js/.exec(id);
	if (match) {
		const language = match[1]; // e.g. "en"
		const dependentEntryPoints = [];

		// we use a Set here so we handle each module at most once. This
		// prevents infinite loops in case of circular dependencies
		const idsToHandle = new Set(getModuleInfo(id).dynamicImporters);

		for (const moduleId of idsToHandle) {
			const { isEntry, dynamicImporters, importers } =
				getModuleInfo(moduleId);
			if (isEntry || dynamicImporters.length > 0)
				dependentEntryPoints.push(moduleId);

			// The Set iterator is intelligent enough to iterate over
			// elements that are added during iteration
			for (const importerId of importers) idsToHandle.add(importerId);
		}

		// If there is a unique entry, we put it into a chunk based on the
		// entry name
		if (dependentEntryPoints.length === 1) {
			return `${
				dependentEntryPoints[0].split('/').slice(-1)[0].split('.')[0]
			}.strings.${language}`;
		}
		// For multiple entries, we put it into a "shared" chunk
		if (dependentEntryPoints.length > 1) {
			return `shared.strings.${language}`;
		}
	}
}
```