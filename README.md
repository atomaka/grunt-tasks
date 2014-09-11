# Global Runners

## Usage

grunt --gruntfile ~/grunt-test/Gruntfile.js TASK

alias rt="grunt --gruntfile ~/grunt-test/Gruntfile.js TASK"

## Tasks

* fixwhitespace - Removes trailing whitespace from files in /tmp/test
* watch - Watches /tmp/test for any changes and will run fixwhitespace if any
  occur
