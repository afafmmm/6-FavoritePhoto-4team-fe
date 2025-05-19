"use client";

import React, { useEffect, useState } from "react";
import Input from "./Input";
import clsx from "clsx";
import TextArea from "./TextArea";
import Select from "./Select";
import File from "./File";
import Button from "@/components/ui/Button";

export default function PostForm({ grades, genres }) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [volumn, setVolumn] = useState(""); // 총 발행량
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // 제출 여부(오류 검사 때문에 만듦)
  const [touched, setTouched] = useState({
    name: false,
    price: false,
    volumn: false,
  }); // 입력 여부(오류 검사 때문에 만듦22)

  // 입력 상태 감지하는 함수
  const handleChange = (setter, field) => (e) => {
    setter(e.target.value);
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // 유효성 검사
  const validate = () => {
    const newError = {};

    if (!name) {
      newError.name = { none: "카드 이름을 입력해 주세요." };
    } else if (name.length > 15) {
      newError.name = { over: "15자 이내로 입력해 주세요." };
    }

    if (!grade) newError.grade = "등급을 선택해 주세요.";
    if (!genre) newError.genre = "장르를 선택해 주세요.";

    if (!price) {
      newError.price = { none: "가격을 입력해 주세요." };
    } else if (!/^\d+$/.test(price)) {
      newError.price = { type: "가격을 숫자로 입력해 주세요." };
    }

    if (!volumn) {
      newError.volumn = { none: "총 발행량을 입력해 주세요." };
    } else if (!/^\d+$/.test(volumn)) {
      newError.volumn = { type: "발행량을 숫자로 입력해 주세요." };
    } else if (volumn > 10) {
      newError.volumn = { over: "총 발행량은 10장 이하로 선택 가능합니다." };
    }

    if (!image) newError.image = "파일을 선택해 주세요.";

    const isFormValid = Object.keys(newError).length === 0;
    setErrors(newError);
    setIsValid(isFormValid);

    return isFormValid;
  };

  useEffect(() => {
    validate();
  }, [name, grade, genre, price, volumn, image]);

  // 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true); // 제출했어!
    const valid = validate();
    setIsValid(valid);

    if (!valid) return;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("grade", grade);
    formData.append("genre", genre);
    formData.append("price", price);
    formData.append("volumn", volumn);
    formData.append("image", image);
    formData.append("description", description);
  };

  return (
    <form
      action="/api/me/post"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleSubmit} // Enter로 제출!
      className={clsx(
        "gap-10",
        "flex flex-col justify-center items-center w-full max-w-[345px] md:max-w-110 lg:max-w-130 mx-auto mb-[100px]"
      )}
    >
      <Input
        label="포토카드 이름"
        name="name"
        placeholder="포토카드 이름을 입력해 주세요"
        value={name}
        onChange={handleChange(setName, "name")}
        error={(isSubmitted || touched.name) && errors.name}
      />
      <Select
        type="등급"
        options={grades}
        selected={grade}
        error={isSubmitted && errors.grade}
        onChange={(e) => setGrade(e)}
      />
      <Select
        type="장르"
        options={genres}
        selected={genre}
        error={isSubmitted && errors.genre}
        onChange={(e) => setGenre(e)}
      />
      <Input
        label="가격"
        name="price"
        placeholder="가격을 입력해 주세요"
        value={price}
        onChange={handleChange(setPrice, "price")}
        error={(isSubmitted || touched.price) && errors.price}
      />
      <Input
        label="총 발행량"
        name="volumn"
        placeholder="총 발행량을 입력해 주세요"
        value={volumn}
        onChange={handleChange(setVolumn, "volumn")}
        error={(isSubmitted || touched.volumn) && errors.volumn}
      />
      <File
        label="사진 업로드"
        error={isSubmitted && errors.image}
        onChange={setImage}
      />
      <TextArea
        label="포토카드 설명"
        name="description"
        placeholdrer="카드 설명을 입력해 주세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="exchangeGreen" disabled={!isValid}>
        생성하기
      </Button>
    </form>
  );
}
