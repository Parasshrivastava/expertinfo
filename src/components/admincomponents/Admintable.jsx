
import { Table } from 'flowbite-react';

export default function Component({ data }) {
  const catdata = data;
  // console.log(catdata);


  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Sno'</Table.HeadCell>
          <Table.HeadCell>Category Name</Table.HeadCell>
          <Table.HeadCell>Category Desc</Table.HeadCell>
          <Table.HeadCell>Category image</Table.HeadCell>
         
        </Table.Head>
        <Table.Body className="divide-y">

          {data.map((data, i) => {
            return <>

            
            
              <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">

             

                <Table.Cell>{i+1}</Table.Cell>
                <Table.Cell>{data.catname}</Table.Cell>
                <Table.Cell>{data.catDesc}</Table.Cell>
                <Table.Cell>
                  <img href="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width='50px' height='50px'/>
                
                </Table.Cell>
              </Table.Row>
            </>
          })}




        </Table.Body>
      </Table>
    </div>
  );
}
