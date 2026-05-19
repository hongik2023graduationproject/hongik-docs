# Security Policy

## 지원 버전

현재 `main` 브랜치만 보안 업데이트를 받습니다.

## 취약점 신고

보안 취약점을 발견하셨다면 **공개 이슈로 등록하지 말아 주세요**.

비공개 채널:

1. **GitHub Security Advisory (권장)** — 저장소의 `Security` 탭 → `Report a vulnerability`
2. **이메일** — 메인테이너에게 직접

## 신고 시 포함하면 도움 되는 정보

- 취약점 유형 (예: 빌드된 정적 사이트의 XSS, InlinePlayground 컴포넌트 우회, 백엔드 API 라우팅 문제 등)
- 영향받는 페이지/컴포넌트
- 재현 단계
- PoC

## 응답 일정

- **48시간 이내**: 접수 확인
- **7일 이내**: 평가 + 수정 일정
- **30일 이내**: 패치 + 공개

## 보안 모델 요약

- 정적 사이트(VitePress) + nginx로 서빙
- `InlinePlayground.vue`는 브라우저에서 hong-ik WASM 인터프리터를 **로컬로 실행**한다 (백엔드 호출 없음). 사용자 코드는 사용자 브라우저 밖으로 나가지 않으며, 따라서 서버 측 코드 실행 샌드박싱 문제 자체가 존재하지 않는다. 출력은 Vue 텍스트 보간(`{{ output }}`)으로만 렌더링 → XSS 차단.
- nginx에 보안 헤더 적용: HSTS, X-Frame-Options DENY, CSP (`unsafe-inline`은 VitePress 호환을 위해 임시 허용 — 추후 hash/nonce로 좁힐 예정)
- WASM 산출물은 hong-ik 저장소의 GitHub Release에서 빌드 시점에 동기화 (`scripts/sync-wasm.sh`). 직접 커밋된 binary는 없다.
