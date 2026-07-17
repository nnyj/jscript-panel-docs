# IThemeManager

## `DrawThemeBackground(gr, x, y, w, h)`

| Arguments |  |  |
| --- | --- | --- |
| gr | IJSGraphics |  |
| x | number |  |
| y | number |  |
| w | number |  |
| h | number |  |

No return value.

## `GetThemeColour(propid)`

| Arguments |  |  |
| --- | --- | --- |
| propid | number | https://docs.microsoft.com/en-gb/windows/win32/controls/property-typedefs#property-ids |

Returns a `number`.

## `IsThemePartDefined(partid[, stateid])`

| Arguments |  |  |
| --- | --- | --- |
| partid | number |  |
| stateid | number | Default 0. https://docs.microsoft.com/en-gb/windows/win32/controls/parts-and-states |

Returns a `boolean` value.

## `SetPartAndStateID(partid, stateid)`

| Arguments |  |  |
| --- | --- | --- |
| partid | number |  |
| stateid | number |  |

No return value.
