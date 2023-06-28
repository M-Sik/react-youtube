import React, { FormEvent, useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [text, setText] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header>
      <Link to={'/'}>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
