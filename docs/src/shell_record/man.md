
### man git
```shell
GIT(1)                            Git Manual                            GIT(1)

  

**NAME**

       git - the stupid content tracker

  

**SYNOPSIS**

       git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]

           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]

           [-p|--paginate|-P|--no-pager] [--no-replace-objects] [--bare]

           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]

           [--super-prefix=<path>] [--config-env=<name>=<envvar>]

           <command> [<args>]

  

**DESCRIPTION**

       Git is a fast, scalable, distributed revision control system with an

       unusually rich command set that provides both high-level operations and

       full access to internals.

  

       See **gittutorial**(7) to get started, then see **giteveryday**(7) for a useful

       minimum set of commands. The **Git** **User’s** **Manual**[1] has a more in-depth

       introduction.

  

       After you mastered the basic concepts, you can come back to this page

       to learn what commands Git offers. You can learn more about individual

       Git commands with "git help command". **gitcli**(7) manual page gives you

       an overview of the command-line command syntax.

  

       A formatted and hyperlinked copy of the latest Git documentation can be

       viewed at **https://git.github.io/htmldocs/git.html** or

       **https://git-scm.com/docs**.

  

**OPTIONS**

       -v, --version

           Prints the Git suite version that the git program came from.

  

           This option is internally converted to **git** **version** **...** and accepts

           the same options as the **git-version**(1) command. If **--help** is also

           given, it takes precedence over **--version**.

  

       -h, --help

           Prints the synopsis and a list of the most commonly used commands.

           If the option **--all** or **-a** is given then all available commands are

           printed. If a Git command is named this option will bring up the

           manual page for that command.

  

           Other options are available to control how the manual page is

           displayed. See **git-help**(1) for more information, because **git** **--help**

           **...** is converted internally into **git** **help** **...**.

  

       -C <path>

           Run as if git was started in <path> instead of the current working

           directory. When multiple **-C** options are given, each subsequent

           non-absolute **-C** **<path>** is interpreted relative to the preceding **-C**

           **<path>**. If <path> is present but empty, e.g.  **-C** **""**, then the

           current working directory is left unchanged.

  

           This option affects options that expect path name like **--git-dir**

           and **--work-tree** in that their interpretations of the path names...
```