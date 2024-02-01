import './App.css';
import { Heading } from './components/Heading';
import { TableDemo } from './components/DataTable';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
function App() {
	const [click, setClick] = useState(false);
	
	return (
		<div className='flex items-center flex-col'>
			<Heading text={'Data Fetcher'} />
			<Button className='my-6' onClick={()=>setClick(!click)}>{click?'Remove Data':'Get Data'}</Button>
			{click && <TableDemo />}
		</div>
	);
}

export default App;
