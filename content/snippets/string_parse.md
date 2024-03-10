---
title: string_parse
description: 
author: GMScripts
tags: Computation, Strings
source: https://www.gmlscripts.com/script/string_parse
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Strings/string_parse.gml
---

string_parse
============

    //  string_parse(str, token, ignore)
    list = string_parse("cat|dog|house|bee", "|", true);    //  [ "cat", "dog", "house", "bee" ]
    list = string_parse("cat|dog|||house|bee", "|", true);  //  [ "cat", "dog", "house", "bee" ]
    list = string_parse("cat|dog|||house|bee", "|", false); //  [ "cat", "dog", "", "", "house", "bee" ]
    list = string_parse("cat|dog|house|bee", "o", true);    //  [ "cat|d", "g|h", "use|bee" ]
    list = string_parse("cat|dog|house|bee", "", true);     //  [ "cat|dog|house|bee" ]
    list = string_parse("cat|dog|house|bee", "#", true);    //  [ "cat|dog|house|bee" ]
    list = string_parse("", "|", true);                     //  [ ]

script: string_parse.gml

contributors: EyeGuy
