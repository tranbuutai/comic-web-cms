import * as yup from "yup";

export const schemaComic = yup.object({
    author: yup
        .string()
        .required("Bạn chưa nhập tên tác giả")
        .min(2, "Nhập ít nhất 2 kí tự!")
        .max(30, "Nhập nhiều nhất 30 kí tự!"),
    describe: yup.string().required("Bạn chưa nhập mô tả").min(5, "Nhập ít nhất 5 kí tự!"),
    genres: yup.array().required().min(1, "Vui lòng thêm ít nhất 1 thể loại!"),
    status: yup.string().required("Bạn chưa chọn trang thái"),
    name: yup.object({
        orgName: yup
            .string()
            .required("Bạn chưa nhập tên gốc")
            .min(2, "Nhập ít nhất 2 kí tự!")
            .max(50, "Nhập nhiều nhất 50 kí tự!"),
        vnName: yup
            .string()
            .required("Bạn chưa nhập tên việt")
            .min(2, "Nhập ít nhất 2 kí tự!")
            .max(50, "Nhập nhiều nhất 50 kí tự!"),
    }),
});

export const schemaImagesUpload = yup.object().shape({
    images: yup.object().shape({
        banner: yup.object().shape({
            file: yup.array().min(1),
            url: yup.string().required(),
        }),
        thumbnail: yup.object().shape({
            file: yup.array().min(1),
            url: yup.string().required(),
        }),
    }),
});

export const schemaChapter = yup.object().shape({
    nameChapter: yup
        .string()
        .required("Bạn chưa nhập chương")
        .min(1, "Nhập ít nhất 1 kí tự!")
        .max(60, "Tên chương quá  60 kí tự"),
    images: yup.array().min(1, "Vui lòng chọn ảnh!"),
});
