#/bin/zsh

fswatch -o ./config.yaml ./footprints | xargs -n1 -I{} ./gen.sh