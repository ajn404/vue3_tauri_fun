<template>
    <div>

    </div>
</template>


<script lang="ts" setup>
const log = (): MethodDecorator|any => (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${key} called with args ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} returned ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}

class Example {
    @log()
    greet(name: string) {
        console.log('great');
        return `Hello, ${name}!`;
    }
}

const example = new Example();
example.greet('World');
</script>