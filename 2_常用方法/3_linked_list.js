/* 
单向链表：线型数据结构，指针指向下一个节点，终点指向null
双向链表：可以往前或者往后添加节点，指针指向前一个节点和后一个节点
循环链表：循环链表的第一个节点指向最后一个节点，最后一个节点指向第一个节点（循环链表又可以划分为“单向循环链表”和“双向循环链表”
*/
// 链表对象化，便于理解
const obj = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null,
    },
  },
};

//

class neNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 实现一个单项链表
class singleLinkedList {
  constructor() {
    this.head = null;
  }
  // 添加节点
  add(data) {
    let node = new neNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  // 插入节点
  insert(data, target) {
    let node = new neNode(data);
    let current = this.head;
    while (current.next) {
      if (current.data === target) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }
  // 查找节点
  find(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  // 删除节点
  remove(data) {
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }
}
const list = new singleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.insert(4, 2);
console.dir(list, { depth: null });
console.log(list);
