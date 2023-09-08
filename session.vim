let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Projects/Web/HistoryAsAnArt
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +28 TODO.md
badd +22 HistoryAsAnArt/Viewer/static/Viewer/js/viewer.js
badd +102 HistoryAsAnArt/Base/templates/Base/base.html
badd +300 HistoryAsAnArt/Viewer/static/Viewer/css/viewer.css
badd +15 HistoryAsAnArt/Base/static/Base/css/navigation.css
badd +108 HistoryAsAnArt/Base/static/Base/css/base.css
badd +52 HistoryAsAnArt/Base/static/Base/css/button.css
badd +15 HistoryAsAnArt/Base/static/Base/css/containers.css
badd +140 HistoryAsAnArt/Base/static/Base/js/base.js
argglobal
%argdel
edit HistoryAsAnArt/Viewer/static/Viewer/js/viewer.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 76 + 94) / 189)
exe '2resize ' . ((&lines * 28 + 26) / 53)
exe 'vert 2resize ' . ((&columns * 112 + 94) / 189)
exe '3resize ' . ((&lines * 20 + 26) / 53)
exe 'vert 3resize ' . ((&columns * 112 + 94) / 189)
argglobal
balt HistoryAsAnArt/Base/static/Base/js/base.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 33 - ((32 * winheight(0) + 24) / 49)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 33
normal! 024|
wincmd w
argglobal
if bufexists(fnamemodify("HistoryAsAnArt/Base/templates/Base/base.html", ":p")) | buffer HistoryAsAnArt/Base/templates/Base/base.html | else | edit HistoryAsAnArt/Base/templates/Base/base.html | endif
if &buftype ==# 'terminal'
  silent file HistoryAsAnArt/Base/templates/Base/base.html
endif
balt HistoryAsAnArt/Viewer/static/Viewer/js/viewer.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 94 - ((10 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 94
normal! 026|
wincmd w
argglobal
if bufexists(fnamemodify("HistoryAsAnArt/Viewer/static/Viewer/css/viewer.css", ":p")) | buffer HistoryAsAnArt/Viewer/static/Viewer/css/viewer.css | else | edit HistoryAsAnArt/Viewer/static/Viewer/css/viewer.css | endif
if &buftype ==# 'terminal'
  silent file HistoryAsAnArt/Viewer/static/Viewer/css/viewer.css
endif
balt HistoryAsAnArt/Base/static/Base/css/base.css
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 296 - ((8 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 296
normal! 010|
wincmd w
exe 'vert 1resize ' . ((&columns * 76 + 94) / 189)
exe '2resize ' . ((&lines * 28 + 26) / 53)
exe 'vert 2resize ' . ((&columns * 112 + 94) / 189)
exe '3resize ' . ((&lines * 20 + 26) / 53)
exe 'vert 3resize ' . ((&columns * 112 + 94) / 189)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
