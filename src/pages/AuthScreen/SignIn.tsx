import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useIonRouter } from '@ionic/react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

import InputField from '../../components/shared/Input';
import Button from '../../components/shared/Button';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useIonRouter();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <div className="flex flex-col justify-center min-h-screen bg-white px-6">
      <h1 className="text-3xl font-bold text-black mb-2">おかえりなさい!</h1>
      <p className="text-gray-500 mb-8">アカウントにログインしてください</p>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <InputField
              name="email"
              label="メール"
              placeholder="メールアドレス"
              icon={Mail}
              type="email"
            />

            <InputField
              name="password"
              label="パスワード"
              placeholder="パスワード"
              icon={Lock}
              type={showPassword ? 'text' : 'password'}
              iconRight={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <Eye className="w-5 h-5 text-gray-400" /> : <EyeOff className="w-5 h-5 text-gray-400" />}
                </button>
              }
            />

            <div className="text-right">
              <button
                type="button"
                className="text-teal-600 hover:text-teal-700"
                onClick={() => router.push('/forgot-password', 'forward')}
              >
                パスワードを忘れましたか？
              </button>
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'ログイン中...' : 'ログイン'}
            </Button>

            <p className="text-center text-gray-500">
              アカウントをお持ちでないですか？{' '}
              <span
                className="text-teal-500 hover:text-teal-600 cursor-pointer"
                onClick={() => router.push('/signup', 'forward')}
              >
                会員登録
              </span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
