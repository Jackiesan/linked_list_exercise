require_relative 'spec_helper'

describe "List class" do

  before do
    @list = LinkedList.new
  end

  describe "LinkedList instantiation" do

    it "is an instance of a List" do
      @list.must_be_kind_of LinkedList
    end

    it "keeps head private when instantiated" do
      @list.wont_respond_to :head
    end
  end

  describe "insert(value) method" do

    it "adds new node as head to an empty linked list" do
      @list.insert(1)
      @list.head.data.must_equal 1
    end
  end

end
