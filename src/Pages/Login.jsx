import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // İkonları import ettik

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Şifre görünürlüğünü kontrol etmek için state
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin'); // Başarılı giriş sonrası admin paneline yönlendirme
    } catch (error) {
      setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    }
  };

  return (
    <div className="flex mt-12">
      <form onSubmit={handleLogin} className="bg-neutral-900 bg-opacity-30 border border-neutral-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white mb-4">Admin Girişi</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded placeholder:text-neutral-500 bg-neutral-800 border border-neutral-700 focus:outline-none text-white"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'} // Şifre görünürlüğüne göre türü ayarla
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded placeholder:text-neutral-500 bg-neutral-800 border border-neutral-700 focus:outline-none text-white pr-10" // Sağ tarafa padding ekle
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Şifre görünürlüğünü değiştir
            className="absolute right-2 top-1/3 transform -translate-y-1/2 text-neutral-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* İkonu durumuna göre göster */}
          </button>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-all"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
