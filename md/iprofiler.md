# IProfiler

Properties

|  |  |  |
| --- | --- | --- |
| Time | number | milliseconds |

Methods

## `Reset()`

No return value.

## `Print()`

No return value.

> Example: ```
> var test = utils.CreateProfiler("test");
> 
> // do something time consuming
> 
> console.log(test.Time); // 789
> test.Print(); // Profiler (test): 789 ms
> ```
