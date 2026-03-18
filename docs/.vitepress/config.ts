import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'hong-ik',
  description: '한글 프로그래밍 언어 — 한국어로 코딩하세요',
  sitemap: {
    hostname: 'https://hong-ik.dev',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ko_KR' }],
    ['meta', { property: 'og:title', content: 'hong-ik — 한글 프로그래밍 언어' }],
    ['meta', { property: 'og:description', content: '한국어로 작성하는 직관적인 프로그래밍 언어. 한글 문법, 이중 실행 엔진, OOP, 31개 내장 함수를 지원합니다.' }],
    ['meta', { property: 'og:image', content: 'https://hong-ik.dev/og-image.svg' }],
    ['meta', { property: 'og:url', content: 'https://hong-ik.dev' }],
    ['meta', { property: 'og:site_name', content: 'hong-ik' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'hong-ik — 한글 프로그래밍 언어' }],
    ['meta', { name: 'twitter:description', content: '한국어로 작성하는 직관적인 프로그래밍 언어. 한글 문법, 이중 실행 엔진, OOP를 지원합니다.' }],
    ['meta', { name: 'twitter:image', content: 'https://hong-ik.dev/og-image.svg' }],
  ],
  locales: {
    root: {
      label: '한국어',
      lang: 'ko-KR',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'hong-ik',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '검색',
            buttonAriaLabel: '검색',
          },
          modal: {
            noResultsText: '검색 결과가 없습니다',
            resetButtonTitle: '초기화',
            footer: {
              selectText: '선택',
              navigateText: '이동',
              closeText: '닫기',
            },
          },
        },
      },
    },

    nav: [
      {
        text: '시작하기',
        link: '/getting-started/introduction',
        activeMatch: '/getting-started/',
      },
      {
        text: '언어 레퍼런스',
        link: '/language-reference/types',
        activeMatch: '/language-reference/',
      },
      {
        text: '내장 함수',
        link: '/builtin-functions/io',
        activeMatch: '/builtin-functions/',
      },
      {
        text: '튜토리얼',
        link: '/tutorials/basics-variables',
        activeMatch: '/tutorials/',
      },
      {
        text: '플레이그라운드',
        link: '/playground/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/hongik-ik/hong-ik',
      },
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: '시작하기',
          collapsed: false,
          items: [
            { text: '소개', link: '/getting-started/introduction' },
            { text: '설치 & 빌드', link: '/getting-started/installation' },
            { text: '첫 프로그램', link: '/getting-started/first-program' },
            { text: 'REPL 모드', link: '/getting-started/repl' },
          ],
        },
      ],
      '/language-reference/': [
        {
          text: '기본 타입',
          collapsed: false,
          items: [
            { text: '타입 시스템 개요', link: '/language-reference/types' },
            { text: '정수 (Integer)', link: '/language-reference/integer' },
            { text: '실수 (Float)', link: '/language-reference/float' },
            { text: '문자 (String)', link: '/language-reference/string' },
            { text: '논리 (Boolean)', link: '/language-reference/boolean' },
          ],
        },
        {
          text: '제어 흐름',
          collapsed: false,
          items: [
            { text: '조건문 (if/else)', link: '/language-reference/if-else' },
            { text: 'while 반복문', link: '/language-reference/while' },
            { text: 'for-range 반복문', link: '/language-reference/for-range' },
            { text: 'foreach 반복문', link: '/language-reference/foreach' },
            { text: '비교문 (match)', link: '/language-reference/match' },
          ],
        },
        {
          text: '함수',
          collapsed: false,
          items: [
            { text: '함수 선언 & 호출', link: '/language-reference/functions' },
            { text: '매개변수 & 반환값', link: '/language-reference/parameters' },
            { text: '고차 함수', link: '/language-reference/higher-order-functions' },
          ],
        },
        {
          text: '객체 지향',
          collapsed: false,
          items: [
            { text: '클래스 정의', link: '/language-reference/classes' },
            { text: '상속 (Inheritance)', link: '/language-reference/inheritance' },
            { text: '생성자', link: '/language-reference/constructor' },
          ],
        },
        {
          text: '컬렉션',
          collapsed: false,
          items: [
            { text: '배열 (Array)', link: '/language-reference/array' },
            { text: '사전 (Dictionary)', link: '/language-reference/dictionary' },
            { text: '튜플 (Tuple)', link: '/language-reference/tuple' },
          ],
        },
        {
          text: '고급',
          collapsed: false,
          items: [
            { text: '예외 처리', link: '/language-reference/exception-handling' },
            { text: '모듈 & 가져오기', link: '/language-reference/modules' },
            { text: '바이트코드 VM', link: '/language-reference/vm' },
          ],
        },
      ],
      '/builtin-functions/': [
        {
          text: '내장 함수',
          collapsed: false,
          items: [
            { text: 'I/O 함수', link: '/builtin-functions/io' },
            { text: '타입 변환', link: '/builtin-functions/type-conversion' },
            { text: '배열 함수', link: '/builtin-functions/array' },
            { text: '문자열 함수', link: '/builtin-functions/string' },
            { text: '수학 함수', link: '/builtin-functions/math' },
            { text: '고차 함수', link: '/builtin-functions/higher-order' },
            { text: '파일 I/O', link: '/builtin-functions/file-io' },
          ],
        },
      ],
      '/tutorials/': [
        {
          text: '기초',
          collapsed: false,
          items: [
            { text: '변수와 타입', link: '/tutorials/basics-variables' },
            { text: '연산자', link: '/tutorials/basics-operators' },
            { text: '조건문', link: '/tutorials/basics-conditionals' },
          ],
        },
        {
          text: '중급',
          collapsed: false,
          items: [
            { text: '함수 작성하기', link: '/tutorials/intermediate-functions' },
            { text: '배열과 반복문', link: '/tutorials/intermediate-arrays' },
            { text: '고차 함수', link: '/tutorials/intermediate-higher-order' },
          ],
        },
        {
          text: '고급',
          collapsed: false,
          items: [
            { text: '클래스와 상속', link: '/tutorials/advanced-oop' },
            { text: '예외 처리', link: '/tutorials/advanced-exceptions' },
            { text: '프로젝트 예제', link: '/tutorials/advanced-projects' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hongik-ik/hong-ik' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2026 hong-ik Contributors',
    },
  },
})
