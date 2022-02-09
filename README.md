# wanted_pre_onboarding

원티드 프리온보딩 코스 선발과제

### 배포

http://ha2ram.github.io/wanted_pre_onboarding

### 실행 방법

1. 로컬에 복사합니다.

```
git clone https://github.com/ha2ram/wanted_pre_onboarding.git
```

2. 해당 폴더로 이동하여 node module을 설치합니다.

```
npm install
```

3. 서버를 실행합니다.

```
npm run start
```

## 1. Modal

![modal](https://user-images.githubusercontent.com/88545516/153205388-d851adae-0988-4ba8-bff6-6b648d234894.gif)

### 구현한 방법과 이유

- Open Modal 버튼을 만들고 `useState`의 값을`false`로 하고 버튼을 클릭할 때 ! 연산자를 이용해 상태를 변경하는 함수를 만들었습니다.
- Modal UI를 만들고 삼항 연산자를 이용해 Modal의 상태가 true일 때 나타나도록 했고 false일 때는 null 값을 넣었습니다.

### 구현하면서 어려웠던 점과 해결 방법

- Modal 버튼을 클릭했을 때 오버레이를 넣는데 어려움이 있었습니다. `position`을 `absolute`로 해서 해결했습니다.
- Modal UI의 background를 처음에는 `color`를 black으로 하고 `opacity`를 0.5로 하여 반투명이 되도록 했습니다. 하지만 Modal UI까지 반투명이 되어버렸습니다. 결국 `rgba(0, 0, 0, 0.5)`로 바꿔서 해결했습니다.

## 2. Tab

![tab](https://user-images.githubusercontent.com/88545516/153205612-68a3dca5-a28c-4b83-97d5-b173d257f32e.gif)

### 구현한 방법과 이유

- Tab 버튼을 3개 만들고 각 버튼에 대응하는 div를 3개 만들었습니다.
- Tab `useState`의 값을 0으로 하고 버튼을 클릭하면 클릭한 버튼에 맞게 상태를 변경하도록 함수를 만들었습니다.
- 버튼을 클릭할 때 삼항 연산자를 이용해 해당 버튼의 `useState` 값과 같으면 `className`이 `active`가 되도록 했습니다.

### 구현하면서 어려웠던 점과 해결 방법

- Tab 버튼을 눌렀을 때 `'active' class`가 생성되도록 해야 하는데 `styled-component`는 어떻게 구현해야 할지 몰라 헤맸습니다. `styled-component`에 `className`을 넣고 삼항 연산자를 사용하는 방법을 찾아서 해결할 수 있었습니다.

---

## Toggle

## Tag

## AutoComplete

## ClickToEdit
