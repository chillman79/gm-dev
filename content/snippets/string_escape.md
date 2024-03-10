---
title: string_escape
description: 
author: GMScripts
tags: Computation, Strings
source: https://www.gmlscripts.com/script/string_escape
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Strings/string_escape.gml
---

string_escape
=============

Note: This script is made obsolete by GameMaker's native understanding
of these escape sequences. It can longer function and appears here for historical purposes only.

Parses all C-style escape sequences in the given string and returns 
the parsed string.

    //      Escape Sequence  |  Meaning
    //      -----------------+--------------------------------
    //      \\               |  Literal backslash
    //      \n               |  ASCII linefeed (LF)
    //      \r               |  ASCII carriage return (CR)
    //      \t               |  ASCII horizontal tab (TAB)
    //      \0               |  ASCII null character (NUL)
    //      \ooo             |  Character with octal value ooo
    //      \xhh             |  Character with hex value hh

script: string_escape.gml

contributors: Yourself
