# icon

![default icon](https://icon.object1037.dev/png?size=200)
![monocolor icon](https://icon.object1037.dev/png?hair=0000&bg=fafafa&size=200)
![monocolor icon dark](https://icon.object1037.dev/png?hair=0000&bg=000&stroke=fafafa&size=200)

My icon as a service.

# API Usage

Access `https://icon.object1037.dev/[format]` to get the icon image in the specified format.

## Acceptable image formats

- svg
- png
- jpeg
- webp
- avif

## Params

Add query parameters to generate custom icons.

- **hair**: Hair color in HEX color code(3, 4, 6, 8 digits) or `transparent` or `currentColor`
- **eye**: Eye color
- **bg**: Background color
- **stroke**: Stroke color
- **strokeWidt**h: Stroke width in number(default is 6)
- **size**: Image size in number(default is 600)

### Examples
```
https://icon.object1037.dev/png
https://icon.object1037.dev/webp?hair=0000&bg=fafafa&size=180
https://icon.object1037.dev/avif?stroke=555&strokeWidth=10
```