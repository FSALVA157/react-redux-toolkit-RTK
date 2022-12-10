import { useEffect } from "react"

import { Avatar, Button, Card, Col, Image, List, Row, Skeleton } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
const dispatch = useDispatch();
const {isLoading,pokemons,page} = useSelector((state)=>state.pokemons)

useEffect(() => {
  dispatch(getPokemons());  
  
}, [])

console.log(pokemons)
const onLoadMore = () => {
  dispatch(getPokemons(page ));  
};

const loadMore =
    !isLoading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <>
        {/* <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              <List.Item.Meta
                avatar={
                  <Avatar size="small" src={pokemon.imageUrl} />
                }
                title={pokemon.name}></List.Item.Meta></li>
                ))
              }
          
        </ul> */}
            <Row gutter={[8,8]}>
              <Col sm={24}>
                
                     <List
                       //className="demo-loadmore-list"
                       loading={isLoading}
                       itemLayout="horizontal"
                       loadMore={loadMore}
                       dataSource={pokemons}
                       renderItem={(pokemon) => (
                        <div style={ { backgroundColor: '#fff', height: '100%', width: '100%', padding: 8 }}>
                        <Image ></Image>
                         <List.Item
                           actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                         >
                           <Skeleton avatar title={false} loading={isLoading} active>
                             <List.Item.Meta
                              //  avatar={<Avatar size={"large"} src={pokemon.url} />}
                               title={<a href="https://ant.design">{pokemon.name}</a>}
                              //  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                             />
                             
                           </Skeleton>
                         </List.Item>
                        
                        </div>

                       )}
                     />
                    </Col>
                 </Row>  
    </>
  )
} 
