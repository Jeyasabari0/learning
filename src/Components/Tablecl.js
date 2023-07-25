import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Data(RollNo, Name, Mark, Grade, Percentage) {
    return { RollNo, Name, Mark, Grade, Percentage }
}

const rows = [
    Data(1, 'Sabari', 77, 'A', 77),
    Data(2, 'Fayaz', 77, 'A', 77),
    Data(3, 'Visvaa', 77, 'A', 77),
    Data(4, 'Sathish', 77, 'A', 77),
]

function Tablecl() {
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>RollNo</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>MARK</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>persentage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <TableRow key={row.RollNo}>
                            <TableCell>{row.RollNo}</TableCell>
                            <TableCell>{row.Name}</TableCell>
                            <TableCell>{row.Mark}</TableCell>
                            <TableCell>{row.Grade}</TableCell>
                            <TableCell>{row.Percentage}</TableCell>
                        </TableRow>
                    ))}
                   
                </TableBody>
            </Table>
        </div>
    )
}

export default Tablecl
