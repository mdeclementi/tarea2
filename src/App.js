import './index.css';
import { faker } from '@faker-js/faker';
import React, { useState, Fragment } from 'react';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import 'primeicons/primeicons.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import PostList from './PostList';
import Profile from './Profile';

function App() {

  const [showPosts, setShowPosts] = useState(true);

  const generaFecha = () => {

    const startDate = new Date(2000, 0, 1);
    const endDate = new Date(2023, 11, 31);
    const fakeDate = faker.date.between(startDate, endDate);

    const dia = fakeDate.getDate();
    let mes = fakeDate.getMonth() + 1;
    const ano = fakeDate.getFullYear();

    if (mes < 10) {
      mes = String(fakeDate.getMonth() + 1).padStart(2, '0');
    }

    return `${dia}/${mes}/${ano}`;
  }

  const profile = {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    username: faker.person.firstName('female'),
    bio: faker.lorem.sentences(2),
  }

  const [posts, setPosts] = useState([
    {
      image: "https://media.cntraveler.com/photos/5fd0def5013df4de80687ce3/master/w_1600%2Cc_limit/BestCitiesInTheWorld-2020-Zurich%2C%2520Switzerland-GettyImages-483262091.jpg",
      createdAt: generaFecha(),
      likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      autor: faker.person.firstName(),
      texto: faker.lorem.sentences(2),
      comments: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    },
    {
      image: "https://media.cntraveler.com/photos/588a0a4fbc3623e22c9e89de/master/w_1600%2Cc_limit/bruges-Gallery-Stock-GS01079498.jpg",
      createdAt: generaFecha(),
      likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      autor: faker.person.firstName(),
      texto: faker.lorem.sentences(2),
      comments: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    },
    {
      image: "https://media.cntraveler.com/photos/56549cbf659c4b48748654d0/master/w_1600%2Cc_limit/christ-the-redeemer-brazil-cr-gallery-stock.jpg",
      createdAt: generaFecha(),
      likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      autor: faker.person.firstName(),
      texto: faker.lorem.sentences(2),
      comments: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    },
    {
      image: "https://boomersdaily.files.wordpress.com/2022/11/brasilia-brazil.jpg",
      createdAt: generaFecha(),
      likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      autor: faker.person.firstName(),
      texto: faker.lorem.sentences(2),
      comments: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    },
    {
      image: "https://wallpapers.com/images/featured/cancun-mexico-pmtjgvv9gw988tzg.jpg",
      createdAt: generaFecha(),
      likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
      autor: faker.person.firstName(),
      texto: faker.lorem.sentences(2),
      comments: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
    },
  ]);

  const [postsFiltrados, setPostsFiltrados] = useState(posts);

  const onLogoClick = () => {
    setShowPosts(true);
  };

  const onProfileClick = () => {
    setShowPosts(false);
  };

  return (
    <Fragment>
      <NavBar onLogoClick={onLogoClick} onProfileClick={onProfileClick}></NavBar>
      <SearchBar posts={posts} setPostsFiltrados={setPostsFiltrados}></SearchBar>
      {showPosts ? <PostList posts={postsFiltrados}></PostList> : <Profile avatar={profile.avatar} username={profile.username} bio={profile.bio}></Profile>}
    </Fragment>
  )
}

export default App;
