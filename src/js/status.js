const statusName = {
    DRAFT: "Черновик",
    IN_PROCESS: "В работе",
    COMPLETED: "Завершена",
    TESTING: "Тестирование",
    TESTING_DONE: "Выполнена",
    CLOSED: "Закрыта",
    DELETED: "Удалена",
    ACTIVE: "Активен",
    BLOCKED: "Не активен",
    DELETED: "Удален"
}

const statusClass = {
    DRAFT: "status-bronze",
    IN_PROCESS: "status-bronze",
    COMPLETED: "status-blue",
    TESTING: "status-bronze",
    TESTING_DONE: "status-blue",
    CLOSED: "status-blue",
    DELETED: "status-red",
    ACTIVE: "status-blue",
    BLOCKED: "status-grey",
    DELETED: "status-red"
}

export { statusName, statusClass }