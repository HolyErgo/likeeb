# Как делать карты кнопок

## Исходные файлы

`likeeb.json` - расположение кнопок на клавиатуре
`config.yaml` - настройка отрисовщика
`../../zmk-likeeb/config/likeeb.keymap` - раскладка клавиш в zmk

## Собираем keymap

```
keymap parse -c 10 --config ./config.yaml -z ../../zmk-likeeb/config/likeeb.keymap >keymap.yaml
```

Берет раскладку из zmk и собирает в yaml. В процессе заменяет коды клавиш на глифы из конфига.

Для русских кнопок я сделал копию `keymap.yaml` в `keymap-ru.yaml` и обрезал лишние слои. В нем есть настройки отрисовки комбо.

## Рисуем раскладку

```
keymap -c config.yaml draw keymap.yaml >keymap.svg

keymap -c config.yaml draw keymap-ru.yaml >keymap-ru.svg
```