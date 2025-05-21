import { Formik } from "formik";
import InputField from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import accountFilled from "../../assets/auth/accountFilled.svg";
import age from "../../assets/main/profile/age.svg";
import gender from "../../assets/main/profile/gender.svg";
import dropdownIcon from "../../assets/main/profile/options.svg";

const Personal = () => {
  const genderOptions = ["男性", "女性", "その他"];
  const ageOptions = Array.from({ length: 3 }, (_, i) => i + 18); 

  return (
    <div className="w-full max-w-[768px] relative mx-auto">
      <div className="w-full mt-[20px]">
        <Formik
          initialValues={{ nickname: "", gender: "", age: "" }}
          validate={(values) => {
            const errors: { [key: string]: string } = {};
            if (!values.nickname)
              errors.nickname = "ニックネームを入力してください";
            if (!values.gender) errors.gender = "性別を選択してください";
            if (!values.age) errors.age = "年齢を選択してください";
            return errors;
          }}
          onSubmit={(values) => {
            console.log("Personal Info Submitted:", values);
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className="space-y-[16px] mx-[26px] ">
              <InputField
                name="nickname"
                type="text"
                label="ニックネーム"
                placeholder="ニックネームを入力"
                icon={accountFilled}
                filledIcon={accountFilled}
              />

              <div className="flex flex-col">
                <label
                  htmlFor="gender"
                  className="text-[14px] font-normal text-[#101828] leading-[140%] mb-[8px]"
                >
                  性別
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    className="w-full appearance-none border border-gray-300 rounded-lg px-10  py-2"
                  >
                    <option value="" disabled>
                      性別を選択
                    </option>
                    {genderOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <img
                    src={gender}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <img
                    src={dropdownIcon}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex flex-col ">
                <label
                  htmlFor="age"
                  className="text-[14px] font-normal text-[#111827] leading-[140%] mb-[8px]"
                >
                  年齢
                </label>
                <div className="relative">
                  <select
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    className="w-full appearance-none border border-gray-300 rounded-lg px-10 py-2"
                  >
                    <option value="" disabled>
                      年齢を選択
                    </option>
                    {ageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}歳
                      </option>
                    ))}
                  </select>
                  <img
                    src={age}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                  <img
                    src={dropdownIcon}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />  
                </div>
              </div>

              <div className="w-full pt-[24px] flex justify-end">
                <button type="submit" className="max-w-[140px] w-full  py-[9px] text-white bg-[#199A8E] rounded-[6px]">
                  保存する
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Personal;
