import './App.css';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

import { ModeToggle } from './components/ui/mode-toggle';

function App() {

  return (
    <>
    <ModeToggle/>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
}

export default App;
