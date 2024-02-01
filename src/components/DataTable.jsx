import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';

export function TableDemo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function getData() {
      setLoading(true);
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        'Loading ...'
      ) : (
        <Table className='w-fit mt-8'>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>UserId</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell className='font-medium'>{item.id}</TableCell>
                <TableCell className='text-center'>{item.userId}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.completed ? 'Done' : 'Not done'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
