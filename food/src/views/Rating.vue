<template>
<main class="main-body">
  <div class="center-div">
            <p>Cadastre uma avaliação</p>
            <br/>
            <form action="" name="rating_form" @submit="goToDashboard">
                <div class="form-div">
                    <label for="evaluation_type">Tipo de avaliação:</label>
                    <select name="evaluation_type" id="evaluation_type" v-model="evaluation.evaluation_type" required>
                        <option value="ELOGIO">ELOGIO</option>
                        <option value="RECLAMAÇÃO">RECLAMAÇÂO</option>
                    </select>

                    <label for="evaluation_grade">Nota da avaliação:</label>
                    <select name="evaluation_grade" id="evaluation_grade" v-model="evaluation.evaluation_grade"  required>
                        <option value="OTIMO">OTIMO</option>
                        <option value="BOM">BOM</option>
                        <option value="RAZOÁVEL">RAZOÁVEL</option>
                        <option value="RUIM">RUIM</option>
                        <option value="MUITO RUIM">MUITO RUIM</option>


                    </select>
                
                    <label for="menu_itens">Item do cardápio:</label>
                    <select name="" id="" v-model="option_name" @click="getOptionID" >
                              <option v-for="opt of options" v-bind:value="opt.option_name" :key="opt.id">{{opt.option_name}}</option>
                          </select>

                    <label for="commentary">Comentário:</label>
                    <select name="commentary" id="commentary" v-model="evaluation.commentary"  required>
                        <option value="BOM TEMPERO">BOM TEMPERO</option>
                        <option value="PONTO CERTO">PONTO CERTO</option>
                        <option value="TEMPERO RUIM">TEMPERO RUIM</option>
                        <option value="PASSOU DO PONTO">PASSOU DO PONTO</option>
                        <option value="MAL CHEIRO">MAL CHEIRO</option>
                        <option value="OUTRO">OUTRO</option>


                    </select>

                    <label for="valuation date">Data da avaliação:</label>
                    <input type="date" name="valuation date" id="valuation date" v-model="evaluation.evaluation_date"  required>
                </div>
                <div class="button-div">
                    <!-- <button type="submit" class="rating-btn" onclick="">Finalizar cadastro de avaliação</button> -->
                    <PrimaryButton placeholder="Avaliar" type="submit" />
                </div>
            </form>
        </div>
</main>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton.vue';
import api from '@/services/api'
export default {
  name: 'Rating',
  data(){
      return{
          options: [],
          option_name: null,
          evaluation: {
              menu_items_id: null,
              evaluation_type: null,
              evaluation_grade: null,
              commentary: null,
              evaluation_date: null,
          }

      }
  },
  components:{
      PrimaryButton
  },
  methods: {
      goToDashboard(e){
          e.preventDefault();
        console.log(this.evaluation);
        this.postEvaluation()
      },
      getOptionID(){
          for(let opt of this.options){
              if(opt.option_name === this.option_name){
                  this.evaluation.option_id = opt.id;
                    console.log(opt.option_id);
                }
            }
      },
    async getAllOptions(){
        const res = await api.get('/option/');
        console.log(res.data.Option);
        this.options = res.data.Option;
    },
    async postEvaluation(){
        try{
            const res = await api.post('/evaluation/', this.evaluation);
            console.log(res.data);
              this.$router.push('/dashboard')
        }catch(e){
            alert(e.response.data.message)
        }
    }
  },
    mounted(){
        this.getAllOptions()
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main-body{
     background-color: #0da3e93b;
    height: 100vh;
    padding-top: 10%;
}

.main-body .center-div{
    background-color: #F7F7F7;
    border: 1px solid #c7c7c7;
    width: 75%;
    height: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin:  auto auto auto;
    text-align: center;
}

.main-body .center-div p{
    font-size: 20px;
    font-weight: 600;
    color: #323751;
}

.main-body .center-div span{
    font-size: 17px;
    font-weight: 500;
    margin-top: 2%;
    margin-bottom: 2%;
}

.main-body .center-div .form-div{
    display: flex;
    flex-direction: column;
}

 select{
    width: 52%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    border-radius: 10px;
    border: 1px solid #c7c7c7;
    padding-left: 1%;
}

select, input:focus{
    outline: none;
}

input{
    width: 52%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2%;
    border-radius: 10px;
    border: 1px solid #c7c7c7;
    padding-left:1% ;
}

.main-body .center-div .form-div label{
    font-weight: 500;
    color: #323751;
}

.main-body .center-div .button-div button{
    margin-bottom: 2%;
    background-color: #05be59;
    color: #fff;
    border: none;
    transition: background-color 0.2s;
}

.main-body .center-div .button-div button:hover{
    background-color: #049c48;
    color: #fff;
    cursor: pointer;
}
</style>