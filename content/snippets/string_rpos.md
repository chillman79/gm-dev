---
title: string_rpos
description: 
author: GMScripts
tags: Computation, Strings
source: https://www.gmlscripts.com/script/string_rpos
github: https://github.com/gmlscripts/scripts/blob/master/Computation/Strings/string_rpos.gml
---

string_rpos
===========

Returns the right-most position of a substring within a string.

    //  string_rpos(substr, str)
    n = string_rpos("abc", "ABCabc");   //  4
    n = string_rpos("ABC", "ABCabc");   //  1
    n = string_rpos("XYZ", "ABCabc");   //  0
    n = string_rpos("", "ABCabc");      //  0
    n = string_rpos("XYZ", "");         //  0
    n = string_rpos("", "");            //  0

script: string_rpos.gml

contributors: xot
