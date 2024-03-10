---
title: string_parse_single
description: 
author: GMScripts
tags: Computation, Strings
source: https://www.gmlscripts.com/script/string_parse_single
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Strings/string_parse_single.gml
---

string_parse_single
===================

Returns the nth token-separated substring from a given string.

    //  string_parse_single(str, token, n, ignore)
    s = string_parse_single("cat|dog|house|bee", "|", 3, true);     //  "house"
    s = string_parse_single("cat|dog|||house|bee", "|", 3, true);   //  "house"
    s = string_parse_single("cat|dog|||house|bee", "|", 3, false);  //  ""
    s = string_parse_single("cat|dog|house|bee", "o", 3, true);     //  "use|bee"
    s = string_parse_single("cat|dog|house|bee", "#", 1, true);     //  "cat|dog|house|bee");
    s = string_parse_single("cat|dog|house|bee", "#", 3, true);     //  ""

script: string_parse_single.gml

contributors: EyeGuy
