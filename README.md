# Global Runners

## Setup

Add an alias to your rc file

```alias rt="grunt --gruntfile ~/grunt-test/Gruntfile.js -cwd=`pwd`"```

## Usage

```rt TASK_NAME```

## Tasks

* fixwhitespace - Removes trailing whitespace from files in /tmp/test
* watch - Watches /tmp/test for any changes and will run fixwhitespace if any
  occur
