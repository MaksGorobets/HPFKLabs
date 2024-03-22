import React from 'react';
import { Menu, Layout, Button, Form, Input } from 'antd'; // імпорт елементів бібліотеки
import picture from './smile2.jpg';

const { Footer } = Layout;

function App() {
    return (
        <div className="App">
            <Layout style={{ height: '100vh' }}>
                <Menu
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        paddingRight: '150px',
                    }}
                    // підключення меню навігації
                    mode="horizontal" // режим горизонтального меню
                    items={[
                        { label: 'Головна', key: 'home' },
                        { label: 'Правила чату', key: 'catalog' },
                        { label: 'Підтримка', key: 'contacts' },
                    ]}
                ></Menu>

                <Layout
                    style={{
                        background: 'white',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={picture}
                        style={{ height: '150px', width: '150px', margin: '50px' }}
                    />

                    <Form
                        // підключення форми авторизації
                        name="wrap"
                        labelCol={{ flex: '110px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        style={{ maxWidth: 400 }}
                    >
                        <Form.Item
                            label="Normal label"
                            name="username"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="A super long label text"
                            name="password"
                            rules={[{ required: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label=" ">
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
