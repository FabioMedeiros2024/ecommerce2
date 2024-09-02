import { PrismaClient, Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
const prisma = new PrismaClient()
let produto: Prisma.ProdutoCreateInput
let valor: Prisma.ValorCreateInput
let venda: Prisma.VendaCreateInput  


async function create(cod: number, nome: string, descricao: string, id_valor: number, valor_: Decimal, id_venda: number, id_vendedor: number)  {
    let produto: Prisma.ProdutoCreateInput
    let valor: Prisma.ValorCreateInput
    let venda: Prisma.VendaCreateInput   
  
    // Check if posts should be included in the query
    produto = {
        cod: cod,
        nome: nome,
        descricao: descricao
      }

    valor = {
        id_valor: id_valor,
        valor: valor_,
        cod: cod
        }

    venda = {
        id_venda: id_venda,
        id_vendedor: id_vendedor,
        cod: cod
        }

    // Pass 'user' object into query
    const produtosCreate = await prisma.produto.create({ data: produto });
    const valorCreate = await prisma.valor.create({data: valor})
    const vendaCreate = await prisma.venda.create({ data: venda})
}

export{create}