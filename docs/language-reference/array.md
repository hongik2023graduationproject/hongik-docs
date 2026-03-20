# 배열 (Array)

배열은 순서가 있는 값들의 컬렉션입니다.

## 선언

```hik
배열 숫자들 = [1, 2, 3, 4, 5]
배열 이름들 = ["김", "이", "박"]
배열 빈배열 = []
```

## 인덱싱

0부터 시작하는 인덱스로 요소에 접근합니다:

```hik
배열 목록 = [10, 20, 30]
출력(목록[0])     // 10
출력(목록[1])     // 20
출력(목록[2])     // 30
```

## 음수 인덱싱

음수 인덱스는 배열의 끝에서부터 접근합니다:

```hik
배열 목록 = [10, 20, 30]
출력(목록[-1])    // 30 (마지막 요소)
출력(목록[-2])    // 20
```

## 배열 수정

```hik
배열 목록 = [1, 2, 3]
목록[0] = 10
출력(목록)    // [10, 2, 3]
```

<a :href="'/playground/?code=' + encodeURIComponent('배열 숫자들 = [1, 2, 3, 4, 5]\n출력(숫자들[0])\n출력(숫자들[-1])\n출력(길이(숫자들))\n\n추가(숫자들, 6)\n출력(숫자들)')" target="_blank">플레이그라운드에서 실행 →</a>

## 관련 내장 함수

- [`길이(배열)`](/builtin-functions/array) - 배열 길이
- [`추가(배열, 값)`](/builtin-functions/array) - 요소 추가
- [`삭제(배열, 인덱스)`](/builtin-functions/array) - 요소 삭제
- [`정렬(배열)`](/builtin-functions/array) - 배열 정렬
- [`뒤집기(배열)`](/builtin-functions/array) - 순서 뒤집기
- [`찾기(배열, 값)`](/builtin-functions/array) - 요소 검색
- [`조각(배열, 시작, 끝)`](/builtin-functions/array) - 부분 배열
- [`포함(배열, 값)`](/builtin-functions/array) - 포함 여부
- [`매핑(배열, 함수)`](/builtin-functions/higher-order) - 변환
- [`걸러내기(배열, 함수)`](/builtin-functions/higher-order) - 필터
- [`줄이기(배열, 함수, 초기값)`](/builtin-functions/higher-order) - 축약
