---
title: string_ucwords
description: 
author: GMScripts
tags: Computation, Strings
source: https://www.gmlscripts.com/script/string_ucwords
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Strings/string_ucwords.gml
---

string_ucwords
==============

Returns a string with the first character capitalized.

    s = string_ucwords("hello, world!");    //  "Hello, World!"
    s = string_ucwords("hello,\nworld!");   //  "Hello,\nWorld!"
    s = string_ucwords("hello,\tworld!");   //  "Hello,\tWorld!"
    s = string_ucwords("HELLO, WORLD!");    //  "HELLO, WORLD!"
    s = string_ucwords("12345");            //  "12345"
    s = string_ucwords("");                 //  ""

script: string_ucwords.gml

contributors: xot
