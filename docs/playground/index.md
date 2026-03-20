---
layout: page
title: 플레이그라운드
description: 웹 브라우저에서 hong-ik 코드를 작성하고 실행해보세요
---

<script setup>
import { ref } from 'vue'

const playgroundUrl = import.meta.env.VITE_PLAYGROUND_URL || 'https://play.hong-ik.dev'
</script>

# 플레이그라운드

웹 브라우저에서 hong-ik 코드를 직접 작성하고 실행할 수 있습니다.

<div class="playground-link">
  <a :href="playgroundUrl" target="_blank" class="vp-button medium brand">
    플레이그라운드 열기 →
  </a>
</div>

## 예제 코드

### Hello, World!

```hik
출력("안녕하세요, 홍익!")
```

### 변수와 연산

```hik
정수 x = 10
정수 y = 20
출력(x + y)
```

### 반복문

```hik
정수 합 = 0
반복 (정수 i = 1; i <= 100; i = i + 1) {
    합 = 합 + i
}
출력(합)
```

### 함수

```hik
함수 팩토리얼(정수 n) -> 정수 {
    만약 (n <= 1) {
        반환 1
    }
    반환 n * 팩토리얼(n - 1)
}

출력(팩토리얼(10))
```

<style>
.playground-link {
  margin: 2rem 0;
  text-align: center;
}
</style>
