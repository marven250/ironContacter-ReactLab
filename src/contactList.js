import React from "react"
import people from "../src/contacts.json"

class ContactList extends React.Component{

        constructor(props){
            super(props)

                this.state= {
                    firstOnes: people.slice(0, 5),
                    bigList: people.slice(5),
                }
        }

        showPeople = () =>{
                return this.state.firstOnes.map((person, idx)=>{
                    return(
                        <tbody id={idx}>
                        <tr >
                            <td><img style={{width: "150px"}} src={person.pictureUrl}></img></td>
                            <td style= {{textAlign: "center"}}>{person.name}</td>
                            <td style={{ textAlign: "center" }}>{person.popularity}</td>
                            <td><button onClick= {()=> {this.deleter(idx)}}>Delete</button></td>
                        </tr>
                        </tbody>
                    )
                })
        }

        deleter = (it) =>{

            let copy3 = [...this.state.firstOnes]

            copy3.splice(it, 1)

            this.setState({
                firstOnes: copy3,
            })
        }

        addRand = () =>{
                let firstOness = [...this.state.firstOnes]
                let bigLists   = [...this.state.bigList]
                let randNum = Math.floor(Math.random()* bigLists.length)

                firstOness.unshift(...bigLists.splice(randNum, 1))

                this.setState({
                    firstOnes: firstOness,
                    bigList: bigLists,
                })
        }

        sortIt = () =>{
            let copy = [...this.state.firstOnes]

            copy.sort((a, b) =>{
                if(a.name>b.name){
                    return 1
                }else if(a.name<b.name){
                    return -1
                }else{
                    return 0
                }
            })
            this.setState({
                firstOnes: copy,
            })
        }

        sorter = () =>{
            let copy2 = [...this.state.firstOnes]

            copy2.sort((a, b) => {
                if (a.popularity < b.popularity) {
                    return 1
                } else if (a.popularity > b.popularity) {
                    return -1
                } else {
                    return 0
                }
            })
            this.setState({
                firstOnes: copy2,
            })
        }


            render(){
                return(
                    <div>
                        <h1><b>IronContacts</b></h1>
                        <button onClick={this.addRand}>Add random person</button>
                        <button onClick={this.sortIt}>Sort By Name</button>
                        <button onClick={this.sorter}>Sort By Popularity</button>
                        <table>
                            <tbody>
                            <tr>         
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>  
                                <th>Action</th>
                            </tr>
                             </tbody>
                            {this.showPeople()}
                        </table>
                    </div>
                )
            }
}

export default ContactList