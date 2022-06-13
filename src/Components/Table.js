import React, {useState} from "react";



const Table = (props) => {

		return (
			<React.Fragment>
			{props.data.length > 0 && 
				<table className="ranking-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Vote Count</th>
						</tr>
					</thead>
					<tbody>

					{[...props.data].sort((a, b) => parseInt(b.votesCount) - parseInt(a.votesCount)).map(p => (
							<tr>
								<td>{p.name}</td>
								<td>{p.votesCount}</td>
							</tr>
						))}
					
					</tbody>
				</table>
			}
			</React.Fragment>
		);

}
export default Table;
