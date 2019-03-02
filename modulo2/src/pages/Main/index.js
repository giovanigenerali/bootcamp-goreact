import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './style';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
    loading: false,
  };

  handleAddRepository = async (e) => {
    this.setState({ loading: true });

    const { repositories, repositoryInput } = this.state;
    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      repositoryError, repositories, repositoryInput, loading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
            placeholder="usuário/repositório"
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
