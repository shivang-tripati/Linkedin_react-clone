import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import { MdCreate } from 'react-icons/md';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../setup/firebase';
import { collection, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const postsCollection = collection(db, 'posts');

  useEffect(() => {
    const unsubscribe = onSnapshot(postsCollection, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(postsCollection, {
        name: 'shivang Tripathi',
        description: 'just a test',
        message: input,
        photoUrl: '',
        timeStamp: serverTimestamp(),
      });
      console.log('Document added successfully');
      setInput(''); // Clear input after posting
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <MdCreate />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='event' color='#C0CBCD' />
          <InputOption Icon={CalendarViewDay} title='write article' color='#7FC15E' />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
      ))}
    </div>
  );
}

export default Feed;
