---
title: string_parse_number
description: 
author: GMScripts
tags: Computation, Strings
source: https://www.gmlscripts.com/script/string_parse_number
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Strings/string_parse_number.gml
---

string_parse_number
===================

Returns number of token-separated substrings from a given string.

    //  string_parse_number(str, token, ignore)
    n = string_parse_number("cat|dog|house|bee", "|", true);    //  4
    n = string_parse_number("cat|dog|||house|bee", "|", true);  //  4
    n = string_parse_number("cat|dog|||house|bee", "|", false); //  6
    n = string_parse_number("cat|dog|house|bee", "o", true);    //  3
    n = string_parse_number("cat|dog|house|bee", "", true);     //  1
    n = string_parse_number("cat|dog|house|bee", "#", true);    //  1
    n = string_parse_number("", "|", true);                     //  0

script: string_parse_number.gml

contributors: EyeGuy
