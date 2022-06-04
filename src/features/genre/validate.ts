import * as yup from "yup";

export const schemaGenre = yup.object({
    name: yup
        .string()
        .required("Bạn chưa nhập tên")
        .min(2, "Nhập ít nhất 2 kí tự!")
        .max(30, "Nhập nhiều nhất 30 kí tự!"),
    describe: yup
        .string()
        .required("Bạn chưa nhập mô tả")
        .min(5, "Nhập ít nhất 5 kí tự!")
        .max(255, "Nhập nhiều nhất 255 kí tự!"),
});
