import { notification } from "antd"

export const Notification = {
    success: (message, description) => {
        notification["success"]({
            message: message,
            description: description,
            duration: 1.5
        })
    },
    warning: (message, description) => {
        notification["warning"]({
            message: message,
            description: description,
            duration: 1.5
        })
    },
    error: (message, description) => {
        notification["error"]({
            message: message,
            description: description,
            duration: 1.5
        })
    }
}