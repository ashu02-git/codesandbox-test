import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // listItem生成
  const listItem = document.createElement("li");
  listItem.className = "list-item";
  listItem.innerText = inputText;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.className = "complet-button";
  completeButton.innerText = "完了";

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.innerText = "削除";

  // listItemの子要素追加
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // 未完了リスト追加
  const incompletedList = document.getElementById("incompleted-list");
  incompletedList.appendChild(listItem);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
