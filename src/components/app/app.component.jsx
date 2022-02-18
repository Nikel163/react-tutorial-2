import React, {Component} from 'react'
import Header from '../header/header.component'
import ProductsList from '../products-list/products-list.component'
import styles from './app.module.css'

class App extends Component {

    state = {
        searchQuery: ""
    }

    render() {
        return (
            <div>
                <Header onSearchChange={this.handleSearchChange}/>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <ProductsList query={this.state.searchQuery}/>
                    </main>
                </div>
            </div>
        )
    }

    handleSearchChange = (query) => {
        this.setState({
            searchQuery: query
        })
    }
}

export default App
