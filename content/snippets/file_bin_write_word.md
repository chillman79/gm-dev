---
title: file_bin_write_word
description: 
author: GMScripts
tags: Files, Input_and_Output
source: https://www.gmlscripts.com/script/file_bin_write_word
github: https://github.com/gmlscripts/scripts/blob/master/Files/Input_and_Output/file_bin_write_word.gml
---

file_bin_write_word
===================

Writes a binary word of a given byte-size to an open binary file.

    fid = file_bin_open("test.dat", 1);
    word = 123456789;
    file_bin_write_word(fid, 4, true, word));
    file_bin_write_word(fid, 4, false, word));
    file_bin_close(fid);
    //  test.dat contents: 07 5B CD 15 15 CD 5B 07

script: file_bin_write_word.gml

contributors: Leif902, xot
