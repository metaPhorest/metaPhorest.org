---
layout: doc
outline: deep
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    name: 'Hideo Iwasaki',
    title: 'metaPhorest Director',
    desc: '<a href="https://hideo-iwasaki.com">https://hideo-iwasaki.com</a><br /><br /><a href="hideo-iwasaki">More...</a>',
    avatar: 'https://www.metaphorest.org/images/hideo-iwasaki.jpg',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/iwasaki.hideo.5' },
    ],
  },
  {
    name: 'Georg Tremmel',
    title: 'Artist-in-Residene',
    desc: '<a href="https://www.bcl.io">BCL</a>, <a href="https://bioclub.tokyo">BioClub Tokyo</a>, <a href="https://fabacademy.org/2021/labs/kamakura/students/georg-tremmel/">FA 2021</a>, metaPhorest, Angewandte<br /><br /><a href="georg-tremmel">More...</a>',
    avatar: 'https://www.github.com/trembl.png',
    links: [
      { icon: 'github', link: 'https://github.com/trembl' },
      { icon: 'x', link: 'https://x.com/trembl' },
      { icon: 'instagram', link: 'https://instagram.com/georg.tremmel' },
      { icon: 'facebook', link: 'https://fb.me/trembl' },
    ],
  },
]
</script>

# Members

ToDo:

- Overview Graphics of Members and when they join
- Name & Links of Members, link to sub-site of members
- Members can share their projects under `/members/name/`

<VPTeamMembers size="small" :members="members" />

