import { Check, X } from 'lucide-react';

interface Props {
  password: string;
}

const PasswordChecklist = ({ password }: Props) => {
  const checks = [
    {
      label: '8文字以上で入力してください。',
      valid: password.length >= 8,
    },
    {
      label: '少なくとも1つの数字（1〜9）を含めてください。',
      valid: /\d/.test(password),
    },
    {
      label: '小文字か大文字を少なくとも1文字含めてください。',
      valid: /[a-zA-Z]/.test(password),
    },
  ];

  const allValid = checks.every((c) => c.valid);

  if (allValid) return null;

  return (
    <div className="mt-2 bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-2">
      {checks.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm">
          {item.valid ? (
            <Check className="text-green-500 w-4 h-4" />
          ) : (
            <X className="text-red-500 w-4 h-4" />
          )}
          <span className={`${item.valid ? 'text-green-600' : 'text-gray-600'}`}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PasswordChecklist;
