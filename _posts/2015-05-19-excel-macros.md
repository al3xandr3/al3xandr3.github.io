--- 
layout: post
title: Excel Macros
category: data
tags:
  - project
  - data
intro: "Excel Macros"
---


## Excel Macros

Excel Macros can be coded up and can extent the usability of Excel, i use some fairly often.

I have a central place to contain them (a .xlam file) and then include them as an external library so that is available to all excels i open in my computer.

## Include a common collection of Excel Macros

1.  New Excel File
2.  Developer Mode (Alt+F11)
3.  Add Module
4.  Put code
5.  Save as .xlam
6.  Open a new excel file: Plugins import: .xlam

After step 6 is now included for all files you open.

_Reference:_

*   [http://www.ozgrid.com/VBA/excel-add-in-create.htm](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.ozgrid.com%2FVBA%2Fexcel-add-in-create.htm&t=OTk4OTY2NmJkOGNkYWMzMTA1NTE5OGE0ZDM5OGUwNWIzZGFlZjM2YSxkY2YwNFM2TQ%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F110244278520%2Fexcel-macros-excel-macros-can-be-coded-up-and&m=1)
*   [http://www.ozgrid.com/forum/showthread.php?t=79163](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.ozgrid.com%2Fforum%2Fshowthread.php%3Ft%3D79163&t=NWRiNjIwZTA1ODQ5ZTliMGUyZWUyZDU5YTgzMTUzZWNjZDA4M2VkMixkY2YwNFM2TQ%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F110244278520%2Fexcel-macros-excel-macros-can-be-coded-up-and&m=1)

## Macro: (nicer) Numbers Formatter

Transforms 12351231124 into: 12,351,231,124

    ' Formats Numbers
    ' ctrl e
    Sub FormatRange()
        Application.ScreenUpdating = False
        Application.Calculation = xlCalculationManual
        For Each c In Selection.Cells
            Select Case c.Value
                Case Is > 1000
                    c.NumberFormat = "0,000"
                Case Is <> Round(c.Value, 2)
                    c.NumberFormat = "0.00"
            End Select
        Next
        Application.ScreenUpdating = True
        Application.Calculation = xlCalculationAutomatic
    End Sub

I have it associated to a key shortcut, but also possible and usefull to have it as a toolbar icon: [http://www.excel-easy.com/vba/examples/add-a-macro-to-the-toolbar.html](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.excel-easy.com%2Fvba%2Fexamples%2Fadd-a-macro-to-the-toolbar.html&t=M2ZkNDVhNzQ2MDQ0YzMyOWRkMjE4ZjE4NjYyOTgwNDI3MjhmYmNhOCxkY2YwNFM2TQ%3D%3D&b=t%3AAqSsId7U2E-eUiTx8sw5vQ&p=http%3A%2F%2Fjourneyman-data-analyst.tumblr.com%2Fpost%2F110244278520%2Fexcel-macros-excel-macros-can-be-coded-up-and&m=1)
