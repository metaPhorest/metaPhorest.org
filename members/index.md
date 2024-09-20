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
    desc: '<a href="hideo-iwasaki">More...</a>',
    avatar: '/images/hideo-iwasaki.jpg',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/iwasaki.hideo.5' },
    ],
  },
  {
    name: 'Georg Tremmel',
    title: 'Artist-in-Residence',
    desc: '<a href="georg-tremmel">More...</a>',
    avatar: 'https://www.github.com/trembl.png',
    links: [
      { icon: 'github', link: 'https://github.com/trembl' },
      { icon: 'x', link: 'https://x.com/trembl' },
      { icon: 'instagram', link: 'https://instagram.com/georg.tremmel' },
      { icon: 'facebook', link: 'https://fb.me/trembl' },
    ],
  },
  {
    name: 'Tomoki Matsumura',
    title: 'Artist-in-Residence',
    desc: '<a href="tomoki-matsumura">More...</a>',
    avatar: 'https://www.github.com/tomoki11.png',
    links: [
      { icon: 'github', link: 'https://github.com/tomoki11' },
      { icon: 'x', link: 'https://x.com/tomokimatsumura' },
      { icon: 'instagram', link: 'https://www.instagram.com/tomoki__matsumura/' },
      { icon: 'facebook', link: 'https://www.facebook.com/tomoki.matsumura11/' },
    ],
  }, 
]
</script>

# メンバー

<VPTeamMembers size="small" :members="members" />

