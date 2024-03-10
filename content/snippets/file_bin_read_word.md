---
title: file_bin_read_word
description: 
author: GMScripts
tags: Files, Input_and_Output
source: https://www.gmlscripts.com/script/file_bin_read_word
github: https://github.com/gmlscripts/scripts/blob/master/Files/Input_and_Output/file_bin_read_word.gml
---

file_bin_read_word
==================

Returns a word value of a given byte-size from an open binary file.

    //  test.dat contents: 07 5B CD 15 15 CD 5B 07
    fid = file_bin_open("test.dat", 0);
    word = file_bin_read_word(fid, 4, true));  //  word == 123456789
    next = file_bin_read_word(fid, 4, false)); //  next == 123456789
    file_bin_close(fid);

script: file_bin_read_word.gml

contributors: Leif902, xot
